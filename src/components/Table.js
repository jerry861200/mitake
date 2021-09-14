<table className="table">
  <thead>
    <tr>
      <th scope="col">姓名</th>
      <th scope="col">電話</th>
      <th scope="col">信箱</th>
      <th scope="col">生日</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Mark</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>


    {
      list.map((item) => {
        const { name, phone, email, birthday } = item;
        return (
          <tr key={phone}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>1997/01/20</td>
          </tr>
        )
      })
    }
  </tbody>
</table>