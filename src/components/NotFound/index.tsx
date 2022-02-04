import { MdOutlineSearchOff } from 'react-icons/md';
import './styles.scss';

export function NotFound() {
  return (
    <div id="not-found-container">
      <MdOutlineSearchOff
        color='#67b093'
        size={60}
      />
      <span>Ops... Nenhum resultado encontrado</span>
    </div>
  )
}