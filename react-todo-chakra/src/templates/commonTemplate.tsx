import { ReactNode } from "react"

export const CommonTemplate = ({ children } : {
    children: ReactNode
})  => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}
