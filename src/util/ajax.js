import { T, getT, getDispatch, createAction } from "../reducer";

window.ajaxUrl = "http://goodtogo.cc/wp-admin/admin-ajax.php";
//window.ajaxUrl = "https://mocki.io/v1/ebfa0396-9249-4147-972f-e4e164986e65";
export function ajaxGet(data, onSuccess, onFail, onFinally) {
  const args = { data, type: "GET" };
  return ajax(args, onSuccess, onFail, onFinally);
}
export function aysncUpdateState(method, data, actionType, key) {
  const args = { data, type: method };
  const dispatch = getDispatch();
  return ajax(
    args,
    (data) => {
      if (data.success) {
        dispatch(createAction(actionType, { [key]: data.data.list }));
      }
    },
    () => {
      dispatch(createAction(actionType, { [key]: null }));
    }
  );
}
export function ajax(args, onSuccess, onFail, onFinally) {
  return window.jQuery
    .ajax(window.ajaxUrl, { type: "GET", dataType: "json", ...args })
    .done((data, textStatus, jqXHR) => {
      console.log("done", data, onSuccess);
      onSuccess && onSuccess(data);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      onFail && onFail(textStatus);
    })
    .always(() => {
      onFinally && onFinally();
    });
}
