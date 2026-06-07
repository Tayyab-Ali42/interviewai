import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RoleScreen from "./pages/RoleScreen"
import ChatScreen from "./pages/ChatScreen"
import SummaryScreen from "./pages/SummaryScreen"
import { InterviewAiContextProvider } from "./context/InterviewAiContext"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleScreen />
  }, {
    path: "/chat",
    element: <ChatScreen />
  }, {
    path: "/summary",
    element: <SummaryScreen />
  }
])


const App = () => {
  return (
    <InterviewAiContextProvider>
      <RouterProvider router={router} />
    </InterviewAiContextProvider>
  )
}

export default App