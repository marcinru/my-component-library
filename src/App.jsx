import './App.css';
import Alert from './components/Alert.jsx';

function App() {
  return (
    <>
      <Alert message="You have 3 new messages" type="info" />
      <Alert message="Transaction successful" type="success" />
      <Alert message="Past credit limit!" type="warning" />
      <Alert message="Transaction failed" type="error" />
    </>
  );
}

export default App;
