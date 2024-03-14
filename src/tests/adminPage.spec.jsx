import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import AdminPage from "../pages/AdminPage";
import { BrowserRouter } from "react-router-dom";

describe('Testes da página admin', () => {
    test('Encontrar elementos da página', () => {
        const adminPage = render(
            <BrowserRouter>
                <AdminPage />
            </BrowserRouter>
        );
        expect(adminPage).toBeTruthy();

        const logo = adminPage.getByText('LOGO');
        expect(logo).toBeInTheDocument();
    });
});