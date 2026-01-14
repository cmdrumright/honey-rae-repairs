export const getCustomerByUserId = (userId) => {
    return fetch(
        `http://localhost:8088/customers?_expand=user&userId=${userId}`
    ).then((res) => res.json())
}
