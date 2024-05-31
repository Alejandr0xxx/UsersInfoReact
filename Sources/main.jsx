
function GetUsersInfo() {
    const [usersInfo, setUsersInfo] = React.useState([])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsersInfo(data)
            })
            .catch(error => console.error('An error has accurred!', error))
    }, [])

    const handleClick = (info) => {
        const alertDiv = document.getElementById('alert')
        alertDiv.classList.remove('alert-no')
        alertDiv.classList.add('alert-yes')

        const extrainfo = alertDiv.innerHTML = `
                <button class='button-extra-info'id="close-button">X</button>
                <h2 class="h2-extra-info"> Informacion extra<h2>
                <p class="extra-info"><strong>Email: </strong> ${info.email}<p>
                <p class="extra-info"><strong>City: </strong> ${info.address.city}<p>
                <p class="extra-info"><strong>Street: </strong> ${info.address.street}<p>
                <p class="extra-info"><strong>Zipcode: </strong> ${info.address.zipcode}<p>
                `

        const closeButton = document.getElementById('close-button');
        closeButton.addEventListener('click', () => {
            alertDiv.classList.remove('alert-yes');
            alertDiv.classList.add('alert-no');
            alertDiv.innerHTML = ''
        });
    }
    return (
        <div className="main-container">
            <header className="header">
                <h1 className="h1-tittle">Lista de Usuarios</h1>
            </header>
            <main className="main-section">
                {usersInfo.map(info => (
                    <div onClick={() => handleClick(info)} key={info.id} className="info-cards">
                        <h2 className="h2-user-name">{info.name}</h2>
                        <h3 className="h3-company">Company:</h3>
                        <p className="user-company-name">{info.company.name}</p>
                    </div>
                ))}
            </main>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GetUsersInfo />)