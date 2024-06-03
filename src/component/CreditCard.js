
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';
import {
    RadioGroup,
    Radio,
    RadioIndicator,
    RadioIcon, CircleIcon,
    RadioLabel
} from "@gluestack-ui/themed";
import { selectGeneral } from "../redux/accountSlice";


const CreditCard = () => {
    const colorMode = useSelector(selectColorMode);
    const { colors } = useTheme();
    const creditcard = useSelector(selectGeneral);
    return (
        <RadioGroup>
            <Radio value="change" size="md" isInvalid={false} isDisabled={false}>
                <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} strokeWidth={1} />
                </RadioIndicator>
                <RadioLabel>{creditcard.tel}</RadioLabel>
            </Radio>
        </RadioGroup>
    );
};
export default CreditCard;