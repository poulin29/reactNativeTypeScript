
import { Text, View } from "react-native";

type PetProps = {
    petName: {
        firstName: string,
        lastName: string
    },
    type:string
}

export const Pet = (props: PetProps) => {
    const { firstName, lastName } = props.petName;

    return (
        <View>
            <Text> I own two pets, named {firstName} and  {lastName}</Text>
            <Text> The pet is a {props.type} breed</Text>
        </View>
    )
}