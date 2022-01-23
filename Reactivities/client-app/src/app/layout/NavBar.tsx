import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";



export default function NavBar() {


    const { activityStore } = useStore();

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/coding.png" alt="logo" style={{ marginRight: '10px' }} />
                    CODELearn
                </Menu.Item>
                <Menu.Item name="Уровни" />
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content="Создать уровень" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}