export default function PaymentFailed() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>❌ Payment Failed</h1>
            <p>Something went wrong. Please try again.</p>
            <a href="/pay">Try Again</a>
        </div>
    );
}