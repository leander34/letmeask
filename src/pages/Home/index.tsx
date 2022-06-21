import { useNavigate } from 'react-router-dom'

import illustration from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import logIn from '../../assets/images/log-in.svg'
import { Container, EnterInfos, Separator, CreateRoom } from './styles'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'


export function Home() {
    const navigate = useNavigate()
    const { user, sigInWithGoogle} = useAuth()
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if(!user) {
            await sigInWithGoogle()
        }
        
        navigate('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if(roomCode.trim() === '') {
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get()
        console.log(roomRef)

        if(!roomRef.exists()) {
            alert('Room does not exists.')
            return
        }

        if(roomRef.val().endedAt) {
            return alert('Room already closed.')
        }

        navigate(`/rooms/${roomCode}`)
    }

    return (
        <Container>
            <aside>
                <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo-real</p>
            </aside>
            <main>
                <EnterInfos>
                    <img src={logoImg} alt="Letmeask" />
                    <CreateRoom onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o google
                    </CreateRoom>
                    <Separator>ou entre em um sala</Separator>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                          type="text"
                          placeholder='Digite o código da sala'
                          onChange={e => setRoomCode(e.target.value)}
                          value={roomCode}
                        />
                        <Button type='submit'>
                            <img src={logIn} alt="logIn" />
                            Entrar na sala
                        </Button>
                    </form>
                </EnterInfos>
            </main>
        </Container>
    )
}