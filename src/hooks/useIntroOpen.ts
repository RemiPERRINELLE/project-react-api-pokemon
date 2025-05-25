import { useIntro } from "@contexts/IntroContext";

export default function useIntroOpen() {
    const { setIntroOpen, setIntroAnimate } = useIntro();

    const toggleIntroOpen = () => {
        setIntroOpen((prev) => !prev)
        setIntroAnimate(false);
    };

    return toggleIntroOpen;
}