import { Center, Text, Spinner } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { api } from "../api"
import CardInfo from "../components/CardInfo"

interface UserData {
    email: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)
    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    }, [])

    if (userData && id !== userData.id) {
        navigate('/')
    }
    return (
        <>
            {
                userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size='xl' color='white' />
                        </Center>
                    ) :
                    (
                        <>
                            <Text fontSize='3xl' fontWeight='bold'>
                                Informações da conta
                            </Text>
                            <CardInfo mainContent={`${userData?.name}`} content={`E-mail: ${userData?.email}`} />
                            <Link to='/conta/1'>
                                <Text fontSize='xl'>
                                    Informações bancárias
                                </Text>
                            </Link>
                        </>
                    )
            }

        </>
    )
}

export default ContaInfo
