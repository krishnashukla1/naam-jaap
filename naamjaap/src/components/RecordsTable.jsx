// client/src/components/RecordsTable.jsx
const RecordsTable = ({ records, onDelete, onResetAll }) => {
  return (
    <div className="records-table">
      <table>
        <thead>
          <tr>
            <th>MALA #</th>
            <th>COUNT</th>
            <th>TIME</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-records">No mala done yet.</td>
            </tr>
          ) : (
            records.map((record) => (
              <tr key={record.id}>
                <td>{record.malaNumber}</td>
                <td>{record.count}</td>
                <td>{record.time}</td>
                <td>
                  <button onClick={() => onDelete(record.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {records.length > 0 && (
        <button className="reset-all" onClick={onResetAll}>
          Reset All
        </button>
      )}
    </div>
  );
};

export default RecordsTable;