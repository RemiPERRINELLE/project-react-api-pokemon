import { beforeEach, describe, expect, it } from "vitest";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from "@testing-library/react";
import Intro from "@components/Intro";
import IntroProvider from "@contexts/IntroContext";


describe('Intro', () => {
    let user: ReturnType<typeof userEvent.setup>;
    let triggerButton: HTMLButtonElement;
    
    beforeEach(() => {
        user = userEvent.setup();
        render(
            <IntroProvider>
                <Intro />
            </IntroProvider>
        );
        triggerButton = screen.getByRole('button');
    });

    it('Affiche le contenu au clic', async () => {
        // Click on trigger
        await user.click(triggerButton);

        // Get content
        const content = await waitFor(() => screen.getByTestId('intro-content'));

        // Assertions
        await waitFor(() => {
            expect(content).toBeInTheDocument();
            expect(screen.getByText(/Ce projet personnel est mon premier en React.js/i)).toBeVisible();
            expect(screen.getByText(/Vie du projet :/i)).toBeVisible();
        });

    });

    it('Cache le contenu au second clic', async () => {
        // Click on trigger to open
        await user.click(triggerButton);
        // Click on trigger to close
        await user.click(triggerButton);

        // Assertions
        await waitFor(() => {
            expect(screen.queryByTestId('intro-content')).toBeNull();
        }, {timeout: 3000});
    });
});