import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
    // /customer/3
    // path=/customers/:customerId

    const { customerId } = useParams()

    return (
        <div>{customerId}</div>
    )
}
