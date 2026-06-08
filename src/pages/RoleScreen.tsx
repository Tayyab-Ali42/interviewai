import { useNavigate } from "react-router"
import { useInterview } from "../context/InterviewAiContext"
import type React from "react"

type role = "Frontend" | "Backend" | "FullStack"

interface RolesTypes {
    id: string,
    role: role
}

const roles: RolesTypes[] = [
    {
        id: crypto.randomUUID(),
        role: "FullStack"
    },
    {
        id: crypto.randomUUID(),
        role: "Backend"
    },
    {
        id: crypto.randomUUID(),
        role: "Frontend"
    }
]

const RoleScreen: React.FC = () => {
    const { setRole } = useInterview()
    const navigate = useNavigate()

    const handleRole = (role: role) => {
        setRole(role)
        navigate("/chat")
    }

    return (
        <div className="max-w-7xl w-screen h-screen p-3 bg-amber-400 mx-auto  flex justify-center items-center">
            <div className="max-w-xl shadow-xl bg-white rounded-xl w-full p-4">
                <h1 className="text-2xl font-bold mb-3 text-center ">Select your role here</h1>
                <ul className="text-center space-y-3">
                    {roles?.map(({ id, role }) => (
                        <li key={id}
                            onClick={() => handleRole(role)}
                            className="bg-amber-600 w-full rounded-md py-3 text-black font-semibold cursor-pointer text-xl">{role}</li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default RoleScreen