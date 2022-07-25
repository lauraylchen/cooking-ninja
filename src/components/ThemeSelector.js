import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/mode-icon.svg'

// styles
import './ThemeSelector.css'

const themeColors = ['#58249C', '#249C6B', '#B70233']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='theme-selector'>
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="Dark/Light Mode Icon"
          onClick={toggleMode}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
