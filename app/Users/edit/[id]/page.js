'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Page({ params }) {
  const { id } = params;
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
        setFirstName(data.firstname);
        setLastName(data.lastname);
        setUserName(data.username);
        setPassWord(data.password);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'ยืนยันการอัพเดทข้อมูล?',
      text: "คุณต้องการบันทึกข้อมูลนี้ใช่หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่, อัพเดทเลย!',
      cancelButtonText: 'ยกเลิก',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, lastname, username, password }),
          });

          if (!res.ok) {
            throw new Error('Failed to update user');
          }

          const result = await res.json();
          console.log(result);

          Swal.fire(
            'สำเร็จ!',
            'ข้อมูลผู้ใช้ถูกอัพเดทเรียบร้อยแล้ว.',
            'success'
          );

          router.push('/Users');
        } catch (error) {
          Swal.fire(
            'เกิดข้อผิดพลาด!',
            'ไม่สามารถอัพเดทข้อมูลได้.',
            'error'
          );
          console.error('Error:', error);
        }
      }
    });
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            Edit Form {/*{JSON.stringify(items)} */}
          </div>
          {items.map((item) => (
          <div className="card-body" key={item.id}>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon1"><i className="bi bi-person"></i></span>
                  <input
                    id="firstname"
                    type="text"
                    className="form-control"
                    defaultValue={item.firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon2"><i className="bi bi-person-fill"></i></span>
                  <input
                    id="lastname"
                    type="text"
                    className="form-control"
                    defaultValue={item.lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon3"><i className="bi bi-person-lines-fill"></i></span>
                  <input
                    id="username"
                    type="text"
                    className="form-control"
                    defaultValue={item.username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-dark text-white" id="basic-addon4"><i className="bi bi-lock-fill"></i></span>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    defaultValue={item.password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-dark"><i className="bi bi-box-arrow-right"></i> Update</button>
              </div>
            </form>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}
