
import { useContext } from "react"
import { TagsData } from "../constants/Data/Data"
import { MainHolder } from "../styles/AuthenticationHeader"
import { ContainerMain } from "../styles/SubHeader"
import Tags from "./Tags"
import { Context } from "./ThemeContext"


const SubHeader = () => {
    const { setValueC, valueC } = useContext(Context);

    return (
        <MainHolder>
            <ContainerMain>
                {
                    TagsData.map((tag) => {
                        return (
                            <Tags tag={tag.name} style={{ backgroundColor: tag.bgc }} image={tag.image} id={tag.id} />

                        )
                    })
                }

            </ContainerMain>
        </MainHolder>
    )
}

export default SubHeader
