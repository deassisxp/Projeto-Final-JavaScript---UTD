function InfoCliente(){
    const {id} = useParams();
    const [cliente,setCliente] = useState({
    id:'',
    nome:'',
    idade:'',
    email:''
    });
    useEffect(()=>{
    buscaCliente(id);
    },[]);
    const buscaCliente = async(id)=>{
    const clienteDados = await (await getCliente(id)).data;
    console.log(clienteDados);
    setCliente(clienteDados);
    }
    return(
    <>
    <h6>Dados cadastrais</h6>
    <p>código: {cliente.id}</p>
    <p>Nome: {cliente.nome}</p>
    <p>Idade: {cliente.idade}</p>
    <p>Email: {cliente.email}</p>
    </>
    );
    }
    export default InfoCliente;