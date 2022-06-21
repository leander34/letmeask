import { Link, useNavigate } from 'react-router-dom'

import illustration from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import { Container, EnterInfos } from '../Home/styles'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../../services/firebase'
export function NewRoom() {
    const { user } = useAuth()
    const [newRoom, setNewRoom] = useState('')
    const navigate = useNavigate()
    async function handleCreateRoom(e: FormEvent) {
        e.preventDefault()

        if(newRoom.trim() === '') {
            return
        }

        const roomRef = database.ref('rooms')
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })
        
        navigate(`/rooms/${firebaseRoom.key}`)
        
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                          type="text" 
                          placeholder='Nome da sala'
                          onChange={e => setNewRoom(e.target.value)}
                          value={newRoom}
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </EnterInfos>
            </main>
        </Container>
    )
}