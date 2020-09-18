
function Auth(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogginView, setIsLoginView] = useState(true)
    const [token, setToken] = useCookies(['mr-token']);

    // this hook listens for channges to the "token" cookie data
    // check if we have token
    useEffect(() => {
        console.log(token['mr-token']);
        if(token['mr-token']) window.location.href = "/movies";
    },[token])

    const loginClicked = () => {
        API.loginUser({username,password})
        .then((resp) => setToken('mr-token', resp.token) )
        .catch((err) => console.log(err))
    }

    const registerClicked = () => {
        API.registerUser({username,password})
        .then(() => loginClicked() )
        .catch((err) => console.log(err))
    }
