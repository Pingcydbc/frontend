'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Page() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://localhost:3000/api/users');

        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
      const result = await res.json();
      console.log(result);

      // Refresh the list after deleting
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: `ต้องการลบผู้ใช้ที่มี ID ${id}?`,
      text: 'คุณแน่ใจหรือไม่ว่าต้องการลบผู้ใช้นี้?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ใช่, ลบเลย!',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
        Swal.fire(
          'ลบแล้ว!',
          'ข้อมูลผู้ใช้ถูกลบเรียบร้อยแล้ว.',
          'success'
        );
      }
    });
  };
  

  return (
    <>
      <br /><br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header">
            Users List
          </div>
          <div className="card-body">
            <div className="row">
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th className="col-md-2 text-center">#</th>
                    <th className="col-md-4">Firstname</th>
                    <th className="col-md-4">Lastname</th>
                    <th className="col-md-1">Edit</th>
                    <th className="col-md-1">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td><Link href={`/Users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                      <td>
                        <button
                          className="btn btn-pill btn-danger"
                          type="button"
                          onClick={() => confirmDelete(item.id)}
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </>
  );
}
