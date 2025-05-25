import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import UpButton from "@components/UpButton";


describe('UpButton', () => {
    let user: ReturnType<typeof userEvent.setup>;
    let triggerButton: HTMLButtonElement;

    beforeEach(() => {
        window.scrollTo = vi.fn();
        user = userEvent.setup();
        render(<UpButton />)
        triggerButton = screen.getByRole('button');
    });

    it('Scroll en haut au clic du bouton', async () => {
        // Click on trigger
        await user.click(triggerButton);

        // Launch function to scroll Top
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
});