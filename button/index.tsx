import { ReactNode } from "react"

type Props = {
   children: ReactNode
   type: "button" | "submit" | "reset",
   onClick?: () => void
   className?: string
}

export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
              {children}
       </button>
   )
}


export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

export const Buttoncoba = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-white-600 text-red-700 rounded-md py-2 px-4 border border-red-600 hover:bg-red-100 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

export const DangerOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-white-600 text-green-700 rounded-md py-2 px-4 border border-green-600 hover:bg-green-100 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

export const DangerInfo = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-white-600 text-sky-600 rounded-md py-2 px-4 border border-sky-600 hover:bg-sky-100 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

