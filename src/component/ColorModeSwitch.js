import { HStack,Text,Switch } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { toggleColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const ColorModeSwitch = () =>{
    const colorMode = useSelector(selectColorMode);
    const { colors } = useTheme();
    const dispatch = useDispatch();

    return(
        <HStack mt="$10" space={8} alignItems="center">
            <Text size="lg" px="$2" color={colorMode == "light"?colors.deepblue:"white"}>
                {colorMode == "light"?"Light Mode":"Dark Mode"}
            </Text>
            <Switch
            name="light Mode"
            value={colorMode === "light"}
            onToggle={()=>dispatch(toggleColorMode())}
            accessibilityLabel="display-mode"
            accessibilityHint="light 0r dark mode"
            />
        </HStack>
    );
};
export default ColorModeSwitch;