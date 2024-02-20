import { Document, Page, View, Text, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import "./index.css";

const PDF = () => {
    const html = `
        <table>
            <tr>
                <td>Visitantes total</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>Visitantes Gênero Masculino</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Visitantes Gênero Feminino</td>
                <td>600</td>
            </tr>
        </table>
    `;
    const stylus = StyleSheet.create({
        table: {
            backgroundColor: "blueviolet"
        }
    })
    return (
        <Document>
            <Page size={'A4'}>
                <View>
                    <Text>Hello word</Text>
                </View>
                <Html style={stylus.table}>{html}</Html>
            </Page>
        </Document>
    );
}

const AdminPage = () => {
    return (
        <>
            <header>
                <h2>LOGO</h2>
            </header>
            <main>
                <h3>
                    Painel
                    <PDFDownloadLink 
                        document={<PDF />} 
                        fileName="boasvindas.pdf"
                    >
                        Baixar PDF
                    </PDFDownloadLink>
                </h3>
            </main>
        </>
    );
}

export default AdminPage;