import { memo, useEffect } from "react"

const ChildComponent = ({ show }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {show.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default memo(ChildComponent)