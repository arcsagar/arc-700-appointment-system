import { RouterProvider } from "react-router-dom";
import "./App.css";
import mainRouter from "./MainRouter/MainRouter";
import Header from "./common/Header";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "./store/authStore/authReducer";

function App() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state: any) => state.auth);

  const loadingView = (
    <div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="flex items-center justify-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4a8 8 0 018 8z"
              />
            </svg>
            <span className="text-gray-600">Loading...</span>
          </div>
    </div>
  )
  return (
    <div>
      {error != "" && (
        <p className="bg-red-500">
          {error} <button onClick={() => dispatch(setError({error: ''}))}>X</button>
        </p>
      )}
      {loading != false &&  loadingView }
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
