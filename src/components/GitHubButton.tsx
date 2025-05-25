import githubLogo from '@assets/github-logo.png'
import githubLogoLight from '@assets/github-logo-light.png'
import { useTheme } from '@contexts/ThemeContext';

export default function GitHubButton () {
    const { isLight } = useTheme();
    return (
        <a href="https://github.com/RemiPERRINELLE/project-react-api-pokemon/" target='_blank' className='w-12 absolute left-3 top-3'>
            <img src={isLight ? githubLogoLight : githubLogo} alt="GitHub" />
        </a>
    )
}