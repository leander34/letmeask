import { Button } from './styles'
import copyImg from '../../assets/images/copy.svg'
type RoomCodeProps = {
    code: string | undefined;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code || '')
    }
  return (
    <Button onClick={copyRoomCodeToClipboard}>
        <div>
            <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala #{props.code}</span>
    </Button>
  )
}
