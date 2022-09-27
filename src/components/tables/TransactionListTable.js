import ListTable from "./ListTable";
import { T } from "../../reducer";

export default function TransactionListTable(props) {
  const {
    dispatch,
    state2: {
      transactionLog: { list, status }
    }
  } = props;
  return (
    <ListTable
      dispatch={dispatch}
      list={list}
      actionType={T.transactionLog}
      status={status}
      ajaxKey="pxq_pgck_get_transactions"
      ajaxFailMsg="Failed to load transactions. Please refresh!"
      renderTableHead={() => (
        <tr>
          <th key="id">ID</th>
          <th key="date">Date</th>
          <th key="detail">Description</th>
          <th key="credits">Credits</th>
        </tr>
      )}
      renderTableBody={(items) =>
        items.map((obj) => (
          <tr key={obj.id}>
            <td key="id">{obj.id}</td>
            <td key="date">{obj.created_at}</td>
            <td key="detail">{obj.detail}</td>
            <td key="credits">
              <span
                style={{ color: "credit" === obj.status ? "green" : "red" }}
              >
                {"credit" === obj.status ? "+" : "-"}
                {obj.credits}
              </span>
            </td>
          </tr>
        ))
      }
    />
  );
}
