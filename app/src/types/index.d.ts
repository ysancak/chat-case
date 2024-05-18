type Styles = { [key: string]: object; };
type Conditions = { [key: string]: boolean;};

type RootStackParamList = {
    Auth: undefined
    Chat: undefined
}

interface Message {
    role: "user" | "assistant";
    content: string;
    date: string;
}