import { Company } from "../../../assets/skillsResources";
import { Column } from "../../generic/Column";
import { Row } from "../../generic/Row";
import "./ResumeDetails.less";

export const ResumeCompany = (props: {id: string, company: Company}) => {

    const {id, company} = props;

    return (
        <>
            <Row key={id + "_resume-company"} className="resume-company">
                <Column>
                <div className="logo">
                    <img className="logo" src={company.logoSrc}/>
                </div>
                <h3>{company.title}</h3>
                <p>{company.location}</p>
                <p>{company.dates}</p>
                </Column>
                <Column>
                {company.text.map((s: string) => {
                    return <p key={id + s.split(" ")[0]}>{s}</p>
                })}
                </Column>
            </Row>
        </>
    )
}