const Absensi = () => {
    const data = [
      { no: 1, nama: 'Rezky Annisa', tanggal: '05-03-2025', masuk: '07.00', pulang: '16.00' },
      { no: 2, nama: 'Liona', tanggal: '05-03-2025', masuk: '-', pulang: '-' },
    ];
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Absensi</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-2">No</th>
              <th className="border border-gray-300 p-2">Nama</th>
              <th className="border border-gray-300 p-2">Tanggal</th>
              <th className="border border-gray-300 p-2">Waktu Masuk</th>
              <th className="border border-gray-300 p-2">Waktu Pulang</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.no}>
                <td className="border border-gray-300 p-2">{item.no}</td>
                <td className="border border-gray-300 p-2">{item.nama}</td>
                <td className="border border-gray-300 p-2">{item.tanggal}</td>
                <td className="border border-gray-300 p-2">{item.masuk}</td>
                <td className="border border-gray-300 p-2">{item.pulang}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Absensi;
  