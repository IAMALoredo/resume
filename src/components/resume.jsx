import React, {useState} from 'react';
import {Card, Media, Accordion, Tab, Tabs, Nav, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";

import Avatar from '../assets/img/avatar-red.svg';
import NoAvatar from '../assets/img/avatar/no-avatar.png';
import MiniLogo from '../assets/img/iam-mini-logo.png';

import DataRequired from "./dataRequired";
import ContactData from "./contactData";
import ProfessionalData from "./professionalData";
import EnglishLevelData from "./englishLevelData";

import EnglishCertificationAdd from "./englishCertificationAdd";
import EnglishCertificationEdit from "./englishCertificationEdit";
import ModalAdviserEnglishCertification from "./modalAdviserEnglishCertification";

import EducationDataAdd from "./educationDataAdd";
import EducationDataEdit from "./educationDataEdit";
import ModalAdviserEducation from "./modalAdviserEducation";

import CertificationAdd from "./certificationAdd";
import CertificationEdit from "./certificationEdit";
import ModalAdviserCertification from "./modalAdviserCertification";

import SoftSkillAdd from "./softSkillAdd";
import SoftSkillEdit from "./softSkillEdit";
import ModalAdviserSoftSkill from "./modalAdviserSoftSkill";

import WorkExperienceDataAdd from "./workExperienceDataAdd";
import WorkExperienceDataEdit from "./workExperienceDataEdit";
import ModalAdviserWorkExperience from "./modalAdviserWorkExperience";

import ReactReadMoreReadLess from "react-read-more-read-less";

import _ from 'lodash';

const Resume=({nameTalent, setNameTalent})=> {
    const [activeAvatar, setActiveAvatar] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [feedback, setFeedback]=useState(false);
    const [disableSkill, setDisableSkill] = useState(false);
    const [disableCheck, setDisableCheck] = useState(false);

    /*const dataWork = [
        {
            _id:1,
            dataRequired:[
                {firstName:'Leonardo', lastName:'Blanco', printName:'Leonardo B.', role:'Fullstack Engineer', level:'Mid Level',}
            ],
            contactData:[
                {telephone:'+569273829', mail:'leo.blanco@gmail.com', linkedin:'linkedin.com/leoblanco',}
            ],
            professionalData:[
                {availability:'2021-06-20', rate:27, timeZone:'GMT-6:00 Central Standard Time - CST', country:'United States of America', city:'Hawaii',}
            ],
            english: {
                level: 'Advance',
            },
            englishCertifications: [
                {_id: 1, year: '2010', institute: 'English institute of London', certification: 'C1 Certification'},
                {_id: 2, year: '2015', institute: 'Chicago language institute', certification: 'C3 Certification'}
            ],
            education:[
                {_id:1, startEduDateYear:'2015', endEduDateYear:'2017', school:'Manchester Institute', degree:'Barchelor Applied Science'}
            ],
            certifications:[
                {_id:1, startCerDateYear:'2015', school:'Chicago Illinois Institute', degree:'Barchelor of design'},
                {_id:2, startCerDateYear:'2021', school:'UNAM Institute', degree:'Barchelor of design'}
            ],
            workExperience:[
                {_id:1, startDateMonth:'January', startDateYear:'2015', endDateMonth:'December', endDateYear:'2017', company:'Bank of america', iamExperience:false, industry:'Financial services', role:'Fullstack Engineer', remote:false, challenge:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.', activities:'1Application for the real estate sector that facilitates the sale, the control of the lots, the visualization of the plans. Excellent experience in a backend development, using a variety of technologies.', mainTech:'Angular', additionalTech:'Javascript'},
                {_id:2, startDateMonth:'January', startDateYear:'2017', endDateMonth:'December', endDateYear:'2018', company:'BBVA', iamExperience:false, industry:'Financial services', role:'Frontend Engineer', remote:false, challenge:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.', activities:'2Application for the real estate sector that facilitates the sale, the control of the lots, the visualization of the plans. Excellent experience in a backend development, using a variety of technologies.', mainTech:'NodeJs', additionalTech:'React'},
                {_id:3, startDateMonth:'January', startDateYear:'2018', endDateMonth:'December', endDateYear:'2020', company:'Bank of america', iamExperience:false, industry:'Financial services', role:'Backend Engineer', remote:true, challenge:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.', activities:'3Application for the real estate sector that facilitates the sale, the control of the lots, the visualization of the plans. Excellent experience in a backend development, using a variety of technologies.', mainTech:'Java', additionalTech:'.NET'},
                {_id:4, startDateMonth:'January', startDateYear:'2018', endDateMonth:'December', endDateYear:'2020', company:'Santander', iamExperience:false, industry:'Human Capital', role:'Backend Engineer', remote:true, challenge:'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through.', activities:'4Application for the real estate sector that facilitates the sale, the control of the lots, the visualization of the plans. Excellent experience in a backend development, using a variety of technologies.', mainTech:'Java', additionalTech:'.NET'},
            ],
            softSkills:[
                {_id:1, skill:'Conflict management', position:"CTO Indeed", name:"Matt Damon", quote:'Strong experience working with AWS and ex all together have +30 years of experience. Excellent experience in a backend development, using a variety of technologies', },
                {_id:2, skill:'Problem-solving', position:"CCO Skybook", name:"Christine McDonald", quote:'Strong experience working with AWS and ex all together have +30 years of experience. Excellent experience in a backend development, using a variety of technologies', },
                {_id:3, skill:'Teamwork', position:"CTO Santander", name:"Sergio Bonte", quote:'Strong experience working with AWS and ex all together have +30 years of experience. Excellent experience in a backend development, using a variety of technologies', },
                {_id:4, skill:'Conflict management', position:"CTO BBVA", name:"Livia Joss", quote:'Strong experience working with AWS and ex all together have +30 years of experience. Excellent experience in a backend development, using a variety of technologies', }
            ]
        }
    ];*/

    const dataWork = [
        {
            _id:1,
            dataRequired:[
                {firstName:'', lastName:'', printName:'', role:'', level:'',}
            ],
            contactData:[
                {telephone:'', mail:'', linkedin:'',}
            ],
            professionalData:[
                {availability:'', rate:0, timeZone:'', country:'', city:'',}
            ],
            english: {
                level: '',
            },
            englishCertifications: [],
            education:[],
            certifications:[],
            workExperience:[],
            softSkills:[]
        }
    ];

    const [data, setData] = useState(dataWork);

    const industries = [...new Set(data[0].workExperience.map(item => item.industry))];
    const companies = [...new Set(data[0].workExperience.map(item => item.company))];
    const skills = [...new Set(data[0].softSkills.map(item => item.skill))];
    //console.log(industries);

    const [key, setKey] = useState(companies[0]);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalRemove, setModalRemove] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);

    const [modalEditDataRequired, setModalEditDataRequired] = useState(false);
    const [modalRemoveDataRequired, setModalRemoveDataRequired] = useState(false);

    const [modalEditContactData, setModalEditContactData] = useState(false);
    const [modalRemoveContactData, setModalRemoveContactData] = useState(false);

    const [modalEditProfessionalData, setModalEditProfessionalData] = useState(false);
    const [modalRemoveProfessionalData, setModalRemoveProfessionalData] = useState(false);

    const [modalEditEnglish, setModalEditEnglish] = useState(false);
    const [modalRemoveEnglish, setModalRemoveEnglish] = useState(false);

    const [modalAddEnglishCertifications, setModalAddEnglishCertifications] = useState(false);
    const [modalEditEnglishCertifications, setModalEditEnglishCertifications] = useState(false);
    const [modalRemoveEnglishCertifications, setModalRemoveEnglishCertifications] = useState(false);

    const [modalAddEducation, setModalAddEducation] = useState(false);
    const [modalEditEducation, setModalEditEducation] = useState(false);
    const [modalRemoveEducation, setModalRemoveEducation] = useState(false);

    const [modalAddCertification, setModalAddCertification] = useState(false);
    const [modalEditCertification, setModalEditCertification] = useState(false);
    const [modalRemoveCertification, setModalRemoveCertification] = useState(false);

    const [modalAddSoftSkill, setModalAddSoftSkill] = useState(false);
    const [modalEditSoftSkill, setModalEditSoftSkill] = useState(false);
    const [modalRemoveSoftSkill, setModalRemoveSoftSkill] = useState(false);

    const [experienceSelected, setExperienceSelected] = useState({
        _id:null,
        startDateYear:'',
        startDateMonth:'',
        endDateYear:'',
        endDateMonth:'',
        company:'',
        iamExperience:false,
        industry:'',
        role:'',
        remote:false,
        challenge:'',
        activities:'',
        mainTech:'',
        additionalTech:''
    })

    const [dataRequiredSelected, setDataRequiredSelected] = useState({
        firstName:'',
        lastName:'',
        printName:'',
        role:'',
        level:'',
    })

    const [contactDataSelected, setContactDataSelected] = useState({
        telephone:'',
        mail:'',
        linkedin:'',
    })

    const [professionalDataSelected, setProfessionalDataSelected] = useState({
        availability:'',
        rate:'',
        timeZone:'',
        country:'',
        city:'',
    })

    const [englishSelected, setEnglishSelected] = useState({
        level:'',
    })

    const [englishCertificationSelected, setEnglishCertificationSelected] = useState({
        _id:null,
        year:'',
        institute:'',
        certification:'',
    })

    const [educationSelected, setEducationSelected] = useState({
        _id:null,
        startEduDateYear:'',
        endEduDateYear:'',
        school:'',
        degree:'',
    })

    const [certificationSelected, setCertificationSelected] = useState({
        _id:null,
        startCerDateYear:'',
        school:'',
        degree:'',
    })

    const [softSkillSelected, setSoftSkillSelected] = useState({
        _id:null,
        skill:'',
        position:'',
        name:'',
        quote:'',
    })


    const selectExperience = (element, type) =>{
        setExperienceSelected(element);
        (type==='Edit')?setModalEdit(true):setModalRemove(true)
    }

    const selectDataRequired = (element, type) =>{
        //console.log(element);
        setDataRequiredSelected(element);
        (type==='Edit')?setModalEditDataRequired(true):setModalRemoveDataRequired(true)
    }

    const selectContactData = (element, type) =>{
        //console.log(element);
        setContactDataSelected(element);
        (type==='Edit')?setModalEditContactData(true):setModalRemoveContactData(true)
    }

    const selectProfessionalData = (element, type) =>{
        //console.log(element);
        setProfessionalDataSelected(element);
        (type==='Edit')?setModalEditProfessionalData(true):setModalRemoveProfessionalData(true)
    }

    const selectEnglish = (element, type) =>{
        //console.log(element);
        setEnglishSelected(element);
        (type==='Edit')?setModalEditEnglish(true):setModalRemoveEnglish(true)
    }

    const selectEnglishCertification = (element, type) =>{
        //console.log(element);
        setEnglishCertificationSelected(element);
        (type==='Edit')?setModalEditEnglishCertifications(true):setModalRemoveEnglishCertifications(true)
    }

    const selectEducation = (element, type) =>{
        //console.log(element);
        setEducationSelected(element);
        (type==='Edit')?setModalEditEducation(true):setModalRemoveEducation(true)
    }

    const selectCertification = (element, type) =>{
        console.log(element);
        setCertificationSelected(element);
        (type==='Edit')?setModalEditCertification(true):setModalRemoveCertification(true)
    }

    const selectSoftSkill = (element, type) =>{
        //console.log(element);
        setSoftSkillSelected(element);
        (type==='Edit')?setModalEditSoftSkill(true):setModalRemoveSoftSkill(true)
    }

    const handleChange = (e) =>{
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setExperienceSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setExperienceSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeDataRequired = (e) =>{
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setDataRequiredSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setDataRequiredSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeContactData = (e) =>{
        const {name, value} = e.target;
        setContactDataSelected((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }

    const handleChangeContactTelData = (e) =>{
        //console.log(e.target)
        setContactDataSelected((prevState)=>({
            ...prevState,
            ['telephone']:e
        }))
    }

    const handleChangeProfessionalData = (e) =>{
        console.log(e.target)
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setProfessionalDataSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setProfessionalDataSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeEnglish = (e) =>{
        console.log(e.target)
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setEnglishSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setEnglishSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeEnglishCertification = (e) =>{
        //console.log(e.target)
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setEnglishCertificationSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setEnglishCertificationSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeEducation = (e) =>{
        //console.log(e.target)
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setEducationSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setEducationSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeCertification = (e) =>{
        //console.log(e.target)
        if(e.target.type !== 'checkbox'){
            const {name, value} = e.target;
            setCertificationSelected((prevState)=>({
                ...prevState,
                [name]:value
            }))
        }else {
            const {name, checked} = e.target;
            setCertificationSelected((prevState)=>({
                ...prevState,
                [name]:checked
            }))
        }
    }

    const handleChangeSoftSkill = (e) =>{
        //console.log(e.target)
        const {name, value} = e.target;
        setSoftSkillSelected((prevState)=>({
            ...prevState,
            [name]:value
        }))

    }

    const edit=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.workExperience.map(z=>{
                if(z._id === experienceSelected._id){
                    z.startDateMonth = experienceSelected.startDateMonth;
                    z.startDateYear = experienceSelected.startDateYear;
                    z.endDateMonth = experienceSelected.endDateMonth;
                    z.endDateYear = experienceSelected.endDateYear;
                    z.company = experienceSelected.company;
                    z.iamExperience = experienceSelected.iamExperience;
                    z.industry = experienceSelected.industry;
                    z.role = experienceSelected.role;
                    z.remote = experienceSelected.remote;
                    z.challenge = experienceSelected.challenge;
                    z.activities = experienceSelected.activities;
                    z.mainTech = experienceSelected.mainTech;
                    z.additionalTech = experienceSelected.additionalTech;
                }
                return 0
            })

            return 0
        })
        setData(newData);
        return setModalEdit(false);
        //console.log(data)
    }

    const editDataRequired=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.dataRequired.map(z=>{
                if(z.firstName !== null) {
                    z.firstName = dataRequiredSelected.firstName;
                    z.lastName = dataRequiredSelected.lastName;
                    z.printName = dataRequiredSelected.printName;
                    z.role = dataRequiredSelected.role;
                    z.level = dataRequiredSelected.level;
                }
                return 0
            })
            return 0
        })
        setNameTalent(`${dataRequiredSelected.firstName} ${dataRequiredSelected.lastName}`)
        setData(newData);
        return setModalEditDataRequired(false);
        //console.log(data)
    }

    const editContactData=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.contactData.map(z=>{
                if(z.mail !== null) {
                    z.telephone = contactDataSelected.telephone;
                    z.mail = contactDataSelected.mail;
                    z.linkedin = contactDataSelected.linkedin;
                }
                return 0
            })
            return 0
        })
        setData(newData);
        return setModalEditContactData(false);
        //console.log(data)
    }

    const editProfessionalData=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.professionalData.map(z=>{
                if(z.availability !== null) {
                    z.availability = professionalDataSelected.availability;
                    z.rate = professionalDataSelected.rate;
                    z.timeZone = professionalDataSelected.timeZone;
                    z.country = professionalDataSelected.country;
                    z.city = professionalDataSelected.city;
                }
                return 0
            })
            return 0
        })
        setData(newData);
        return setModalEditProfessionalData(false);
        //console.log(data)
    }

    const editEnglish=()=>{
        let newData = [...data];
        newData.map(exp=>{
            if(exp.english.level !== null) {
                exp.english.level = englishSelected.level;
            }
            return 0
        })
        setData(newData);
        return setModalEditEnglish(false);
        //console.log(data)
    }

    const editEnglishCertifications=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.englishCertifications.map(z=>{
                if(z._id === englishCertificationSelected._id){
                    z.year = englishCertificationSelected.year;
                    z.institute = englishCertificationSelected.institute;
                    z.certification = englishCertificationSelected.certification;
                }
                return 0
            })
            return 0
        })
        setData(newData);
        return setModalEditEnglishCertifications(false);
        //console.log(data)
    }

    const editEducation=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.education.map(z=>{
                if(z._id === educationSelected._id){
                    z.startEduDateYear = educationSelected.startEduDateYear;
                    z.endEduDateYear = educationSelected.endEduDateYear;
                    z.school = educationSelected.school;
                    z.degree = educationSelected.degree;
                }
                return 0
            })
            return 0
        })
        setData(newData);
        return setModalEditEducation(false);
        //console.log(data)
    }

    const editCertification=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.certifications.map(z=>{
                if(z._id === certificationSelected._id){
                    z.startCerDateYear = certificationSelected.startCerDateYear;
                    z.school = certificationSelected.school;
                    z.degree = certificationSelected.degree;
                }
                return 0
            })
            return 0
        })
        setData(newData);
        return setModalEditCertification(false);
        //console.log(data)
    }

    const editSoftSkill=()=>{
        let newData = [...data];
        newData.map(exp=>{
            exp.softSkills.map(z=>{
                if(z._id === softSkillSelected._id){
                    z.skill = softSkillSelected.skill;
                    z.position = softSkillSelected.position;
                    z.name = softSkillSelected.name;
                    z.quote = softSkillSelected.quote;
                }
                return 0
            })
            return 0
        })
        setData(newData);
        return setModalEditSoftSkill(false);
        //console.log(data)
    }

    const remove =()=>{
        let newData = [...data];
        newData.forEach(function(o) {
            o.workExperience = o.workExperience.filter(s => s._id !== experienceSelected._id);
        })
        setData(newData);
        //console.log("--", data)
        return setModalRemove(false);
    }

    const removeEnglishCertification =()=>{
        let newData = [...data];
        newData.forEach(function(o) {
            o.englishCertifications = o.englishCertifications.filter(s => s._id !== englishCertificationSelected._id);
        })
        setData(newData);
        //console.log("--", data)
        return setModalRemoveEnglishCertifications(false);
    }

    const removeEducation =()=>{
        let newData = [...data];
        newData.forEach(function(o) {
            o.education = o.education.filter(s => s._id !== educationSelected._id);
        })
        setData(newData);
        //console.log("--", data)
        return setModalRemoveEducation(false);
    }

    const removeCertification =()=>{
        let newData = [...data];
        newData.forEach(function(o) {
            o.certifications = o.certifications.filter(s => s._id !== certificationSelected._id);
        })
        setData(newData);
        //console.log("--", data)
        return setModalRemoveCertification(false);
    }

    const removeSoftSkill =()=>{
        let newData = [...data];
        newData.forEach(function(o) {
            o.softSkills = o.softSkills.filter(s => s._id !== softSkillSelected._id);
        })
        setData(newData);
        //console.log("--", data)
        return setModalRemoveSoftSkill(false);
    }

    const add =()=>{
        let newData = [...data];
        let valueInsert = experienceSelected;
        //valueInsert._id=data[data.length-1]._id+1;
        valueInsert['_id']= data[0].workExperience.length+1;
        setExperienceSelected(valueInsert);
        //console.log(experienceSelected, data[0].workExperience.length);

        let newWorkExperienceArray =
            [...data[0].workExperience, valueInsert];

        let newDataFirstObject = {...data[0], workExperience : newWorkExperienceArray};
        newData[0] =  newDataFirstObject;

        //console.log("zzz",newDataFirstObject)
        setData(newData);
        return setModalAdd(false);
    }

    const addEnglishCertification =()=>{
        let newData = [...data];
        let valueInsert = englishCertificationSelected;
        //valueInsert._id=data[data.length-1]._id+1;
        valueInsert['_id']= data[0].englishCertifications.length+1;
        setEnglishCertificationSelected(valueInsert);
        //console.log(experienceSelected, data[0].workExperience.length);

        let newWorkCertificationArray =
            [...data[0].englishCertifications, valueInsert];

        let newDataFirstObject = {...data[0], englishCertifications: newWorkCertificationArray};
        newData[0] =  newDataFirstObject;

        //console.log("...",newDataFirstObject)
        setData(newData);
        return setModalAddEnglishCertifications(false);
    }

    const addEducation =()=>{
        let newData = [...data];
        let valueInsert = educationSelected;
        //valueInsert._id=data[data.length-1]._id+1;
        valueInsert['_id']= data[0].education.length+1;
        setEducationSelected(valueInsert);
        //console.log(experienceSelected, data[0].workExperience.length);

        let newWorkEducationArray =
            [...data[0].education, valueInsert];

        let newDataFirstObject = {...data[0], education: newWorkEducationArray};
        newData[0] =  newDataFirstObject;

        //console.log("...",newDataFirstObject)
        setData(newData);
        return setModalAddEducation(false);
    }

    const addCertification =()=>{
        let newData = [...data];
        let valueInsert = certificationSelected;
        //valueInsert._id=data[data.length-1]._id+1;
        valueInsert['_id']= data[0].certifications.length+1;
        setEducationSelected(valueInsert);
        //console.log(experienceSelected, data[0].workExperience.length);

        let newWorkEducationArray =
            [...data[0].certifications, valueInsert];

        let newDataFirstObject = {...data[0], certifications: newWorkEducationArray};
        newData[0] =  newDataFirstObject;

        //console.log("...",newDataFirstObject)
        setData(newData);
        return setModalAddCertification(false);
    }

    const addSoftSkill =()=>{
        let newData = [...data];
        let valueInsert = softSkillSelected;
        //valueInsert._id=data[data.length-1]._id+1;
        valueInsert['_id']= data[0].softSkills.length+1;
        setEducationSelected(valueInsert);
        //console.log(experienceSelected, data[0].workExperience.length);

        let newWorkEducationArray =
            [...data[0].softSkills, valueInsert];

        let newDataFirstObject = {...data[0], softSkills: newWorkEducationArray};
        newData[0] =  newDataFirstObject;

        setData(newData);
        //console.log("...",data)
        return setModalAddSoftSkill(false);
    }

    const openModalAdd=()=>{
        setExperienceSelected(null);
        return setModalAdd(true);
    }

    const openModalAddEnglishCertification=()=>{
        setEnglishCertificationSelected(null);
        return setModalAddEnglishCertifications(true);
    }

    const openModalAddEducation=()=>{
        setEducationSelected(null);
        return setModalAddEducation(true);
    }

    const openModalAddCertification=()=>{
        setCertificationSelected(null);
        return setModalAddCertification(true);
    }

    const openModalAddSoftSkill=()=>{
        setSoftSkillSelected(null);
        setFeedback(false);
        setDisableSkill(false);
        setDisableCheck(false);
        return setModalAddSoftSkill(true);
    }

    const openModalAddSoftSkillSelected=(value)=>{
        setFeedback(true);
        setDisableSkill(true);
        setDisableCheck(true);
        setSoftSkillSelected({skill: value});
        return setModalAddSoftSkill(true);
    }

    const calculateYears = (start, end) => {
        /*const newStartDate= new Date(start);
        const newEndDate=new Date(end);
        const one_day = (newEndDate - newStartDate) / (365 * 24 * 60 * 60 * 1000);*/
        const years = end - start;
        return Math.floor(years)
    }

    const calculateYearsExperience = () => {
        let totalYears = 0
        data[0].workExperience.map(date =>{
            //console.log(parseInt(date.startDateYear, 10), parseInt(date.endDateYear, 10))
            totalYears = totalYears + calculateYears(parseInt(date.startDateYear, 10), parseInt(date.endDateYear, 10))
        })
        return Math.floor(totalYears)
    }

    const calculateYearsIndustry =(dataIndustry)=>{
        let totalYears = 0
        let firstYear = 0
        let lastYear = 0
        data[0].workExperience.filter(y=>(y.industry === dataIndustry)).map(date=>{
            totalYears = totalYears + calculateYears(parseInt(date.startDateYear, 10), parseInt(date.endDateYear, 10))
        })
        return Math.floor(totalYears)
    }

    const calculateYearsCompany =(dataCompany)=>{
        let totalYears = 0
        let firstYear = 0
        let lastYear = 0
        data[0].workExperience.filter(y=>(y.company === dataCompany)).map(date=>{
            totalYears = totalYears + calculateYears(parseInt(date.startDateYear, 10), parseInt(date.endDateYear, 10))
        })
        return Math.floor(totalYears)
    }

    return (
        <div>
            <div className="container-fluid py-4">
                <div className="row flex-grow-1">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-3">
                        <Card className="shadow-sm rounded-lg border-0 mb-3">
                            <div className="p-4 border-bottom hover-edit">
                                <a href="#/" className="edit-button" onClick={(e)=> {
                                    e.preventDefault();
                                    selectDataRequired(data[0].dataRequired[0], 'Edit');
                                }}><span className="material-icons">edit</span></a>
                                {activeAvatar === true &&<div className="container-avatar mt-2 mb-3">
                                     <img src={Avatar} width={164} alt="avatar"/>
                                </div>}
                                {activeAvatar === false && <div><div className="container-no-avatar mt-2 mb-3">
                                     <img src={NoAvatar} width={88} alt="avatar"/>
                                </div>

                                </div>}
                                {data[0].dataRequired[0].firstName.length === 0 && <h5 className="mb-4">Name</h5>}
                                <h5 className="mb-4">{data[0].dataRequired[0].firstName.charAt(0).toUpperCase() + data[0].dataRequired[0].firstName.slice(1)} {data[0].dataRequired[0].lastName.charAt(0).toUpperCase()+ data[0].dataRequired[0].lastName.slice(1)}</h5>
                                {data[0].dataRequired[0].role.length === 0 &&<h3 className="mb-1 text-muted" style={{opacity:.7}}>Role</h3>}
                                <h3 className="mb-1">{data[0].dataRequired[0].role}</h3>
                                {data[0].dataRequired[0].level.length === 0 &&<h4 className="font-weight-normal text-muted">Seniority</h4>}
                                <h4 className="font-weight-normal">{data[0].dataRequired[0].level}</h4>
                            </div>
                            <div className="p-4 border-bottom hover-edit">
                                <a href="#/" className="edit-button" onClick={(e)=> {
                                    e.preventDefault()
                                    selectContactData(data[0].contactData[0], 'Edit');
                                }}><span className="material-icons">edit</span></a>
                                <h5 className="mb-3" style={{fontWeight:600}}>Contact details</h5>
                                <ul className="list-unstyled mb-2 text-black-50">
                                    <li className="mb-2">
                                        <span className="material-icons-outlined align-middle mr-3">call</span>
                                        {data[0].contactData[0].telephone.length === 0 &&<span className="text-black-50" style={{opacity:0.5}}>Personal phone...</span>}
                                        <span>{data[0].contactData[0].telephone}</span>
                                    </li>
                                    <li className="mb-2">
                                        <span className="material-icons-outlined align-middle mr-3">email</span>
                                        {data[0].contactData[0].mail.length === 0 &&<span className="text-black-50" style={{opacity:0.5}}>Personal mail...</span>}
                                        <span>{data[0].contactData[0].mail}</span>
                                    </li>
                                    <li>
                                        <span className="material-icons-outlined align-middle mr-3">link</span>
                                        {data[0].contactData[0].linkedin.length === 0 &&<span className="text-black-50" style={{opacity:0.5}}>Linkedin profile...</span>}
                                        <span>{data[0].contactData[0].linkedin}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 border-bottom hover-edit">
                                <a href="#/" className="edit-button" onClick={(e)=> {
                                    e.preventDefault()
                                    selectProfessionalData(data[0].professionalData[0], 'Edit');
                                }}><span className="material-icons">edit</span></a>
                                <h5 className="mb-3" style={{fontWeight:600}}>Professional info</h5>
                                <ul className="list-unstyled mb-2 professional-data">
                                    <li className="mr-3">
                                        <small>Rate / hour</small>
                                        {data[0].professionalData[0].rate === 0 &&<h6 style={{fontWeight: 600}}>- -</h6>}
                                        {data[0].professionalData[0].rate !== 0 &&<h6 style={{fontWeight:600}}>${data[0].professionalData[0].rate} dlls</h6>}
                                    </li>
                                    <li className="mr-3">
                                        <small>Availability</small>
                                        {data[0].professionalData[0].availability.length === 0 &&<h6 style={{fontWeight: 600}}>- -</h6>}
                                        <h6 style={{fontWeight:600}}>{data[0].professionalData[0].availability}</h6>
                                    </li>
                                    {/*.substr(0,data[0].professionalData[0].timeZone.indexOf(' '))*/}
                                    <li className="list-inline-item">
                                        <small>TimeZone</small>
                                        {data[0].professionalData[0].timeZone.length === 0 &&<h6 className="mb-0" style={{fontWeight: 600}}>- -</h6>}
                                        <h6 style={{fontWeight:600}}>{data[0].professionalData[0].timeZone}</h6>
                                    </li>
                                </ul>
                                <small className="text-black-50">{data[0].professionalData[0].country.length === 0 && `Country`}, {data[0].professionalData[0].city.length === 0 && `City`}</small>
                                <small className="text-black-50">{`${data[0].professionalData[0].country},`} {data[0].professionalData[0].city}</small>
                            </div>

                            <div className="p-4 border-bottom hover-edit">
                                <a href="#/" className="edit-button" onClick={(e)=> {
                                    e.preventDefault()
                                    selectEnglish(data[0].english, 'Edit');
                                }}><span className="material-icons">edit</span></a>
                                <ul className="list-inline d-flex mb-3">
                                    <li className="list-inline-item mr-auto my-auto">
                                        <h5 className="mb-2" style={{fontWeight:600}}>English level</h5>
                                    </li>
                                </ul>

                                <ul className="list-unstyled mb-2">
                                    <li className="mb-2">
                                        <ul className="list-inline mb-3">
                                            <li className="list-inline-item pb-2">
                                                {data[0].english.level.length === 0 && <span className="badge badge-pill badge-primary mb-0 py-3 px-4 text-muted" style={{fontSize:14, fontWeight:600, color:'#4E6679', background:'#EDF1F5'}}>Select level...</span>}
                                                {data[0].english.level.length !== 0 &&<span className="badge badge-pill badge-primary mb-0 py-3 px-4" style={{fontSize:14, fontWeight:600, color:'#4E6679', background:'#EDF1F5'}}>{data[0].english.level} English</span>}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="list-inline mb-0 d-flex">
                                    <li className="mb-0 list-inline-item mr-auto my-auto">
                                        <small className="text-black-50" style={{textTransform:'uppercase'}}>{data[0].englishCertifications.length === 0 && `No `}Certifications {data[0].englishCertifications.length === 0 && ``}</small>
                                    </li>
                                    <li className="list-inline-item ml-auto my-auto text-right add-certification">
                                        <a href="#/" onClick={(e)=> {
                                            e.preventDefault();
                                            openModalAddEnglishCertification();
                                        }}><small className="text-right" style={{textTransform:'uppercase'}}>Add Certification</small></a>

                                    </li>
                                </ul>
                                <ul className="list-unstyled">
                                    {
                                        data[0].englishCertifications.map((cer, i)=>(
                                            <li className="mb-2" key={i}>
                                                <ul className="list-unstyled mb-2">
                                                    <li className="p-2 hover-edit">
                                                            <a href="#/" className="edit-button" onClick={(e)=>{
                                                                e.preventDefault();
                                                                selectEnglishCertification(cer, 'Edit')
                                                            }}><span className="material-icons">edit</span></a>
                                                            <a href="#/" className="remove-button" onClick={(e)=>{
                                                                e.preventDefault();
                                                                selectEnglishCertification(cer, 'Remove')
                                                            }}><span className="material-icons">delete</span></a>
                                                        <span>{cer.certification}, <br/>{cer.institute}, <br/><small>{cer.year}</small></span>
                                                    </li>
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="p-4">
                                <ul className="list-inline d-flex mb-3">
                                    <li className="list-inline-item mr-auto my-auto">
                                        <h5 className="mb-2" style={{fontWeight:600}}>Education & Certifications</h5>
                                    </li>
                                    <li className="list-inline-item ml-auto my-auto">
                                        <Dropdown
                                            drop="right"
                                        >
                                            <Dropdown.Toggle variant="light no-sty-btn" id="dropdown-basic">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip id={`tooltip-top`}>
                                                            Add education or certifications
                                                        </Tooltip>
                                                    }
                                                >
                                                <span className="material-icons-outlined">add_circle_outline</span>
                                                </OverlayTrigger>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/"  onClick={(e)=> {
                                                    e.preventDefault();
                                                    openModalAddEducation();
                                                }}>Education</Dropdown.Item>
                                                <Dropdown.Item href="#/" onClick={(e)=> {
                                                    e.preventDefault();
                                                    openModalAddCertification();
                                                }}>Certification</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                                <ul className="list-unstyled mb-2 ">
                                    <li className="mb-0">
                                        <small className="text-black-50" style={{textTransform:'uppercase'}}>{data[0].education.length === 0 && `No `}Education {data[0].education.length === 0 && `Upload yet`}</small>
                                        {data[0].education.length === 0 &&<small className="d-block pl-1">- -</small>}
                                    </li>
                                    {
                                        data[0].education.map((edu, i)=>(
                                            <li className="mb-2" key={i}>
                                                <ul className="list-unstyled mb-2">
                                                    <li className="p-2 hover-edit">
                                                        <a href="#/" className="edit-button" onClick={(e)=>{
                                                            e.preventDefault();
                                                            selectEducation(edu, 'Edit')
                                                        }}><span className="material-icons">edit</span></a>
                                                        <a href="#/" className="remove-button" onClick={(e)=>{
                                                            e.preventDefault();
                                                            selectEducation(edu, 'Remove')
                                                        }}><span className="material-icons">delete</span></a>
                                                        <span>{edu.degree} <br/> {edu.school} <br/> <small>{edu.startEduDateYear} - {edu.endEduDateYear}</small></span>
                                                    </li>
                                                </ul>
                                            </li>
                                        ))
                                    }
                                    <li className="mb-0">
                                        <small className="text-black-50" style={{textTransform:'uppercase'}}>{data[0].certifications.length === 0 && `No `}Certifications {data[0].education.length === 0 && `Upload yet`}</small>
                                        {data[0].certifications.length === 0 &&<small className="d-block pl-1">- -</small>}
                                    </li>

                                    {
                                        data[0].certifications.map((cer, i)=>(
                                            <li className="mb-2" key={i}>
                                                <ul className="list-unstyled mb-2">
                                                    <li className="p-2 hover-edit">
                                                        <a href="#/" className="edit-button" onClick={(e)=>{
                                                            e.preventDefault();
                                                            selectCertification(cer, 'Edit')
                                                        }}><span className="material-icons">edit</span></a>
                                                        <a href="#/" className="remove-button" onClick={(e)=>{
                                                            e.preventDefault();
                                                            selectCertification(cer, 'Remove')
                                                        }}><span className="material-icons">delete</span></a>
                                                        <span>{cer.degree} <br/> {cer.school} <br/> <small>{cer.startCerDateYear}</small></span>
                                                    </li>
                                                </ul>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9">
                        <div className="row flex-grow-1">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7 px-xl-1 pl-lg-1">
                                <Card className="shadow-sm rounded-lg border-0 mb-3">
                                    <ul className="list-inline d-flex mt-3 mb-0 mx-4 pb-2 border-bottom">
                                        <li className="list-inline-item mr-auto my-auto">
                                            <div className="d-flex">
                                            <h4>Work Experience</h4>
                                                {calculateYearsExperience() !== 0 &&<span className="ml-4 text-black-50" style={{
                                                    fontSize: 20,
                                                    marginTop: '0px'
                                                }}>+{calculateYearsExperience()} Years</span>}
                                            </div>
                                        </li>
                                        <li className="list-inline-item ml-auto my-auto">
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip id={`tooltip-top`}>
                                                            Add work experiences
                                                        </Tooltip>
                                                    }
                                                >
                                                    <a href="#/" onClick={(e)=> {
                                                        e.preventDefault();
                                                        openModalAdd();
                                                    }}><span className="material-icons-outlined">add_circle_outline</span></a>
                                                </OverlayTrigger>
                                        </li>
                                    </ul>

                                    {data[0].workExperience.length === 0 && <div className="d-flex w-100" style={{opacity:0.7, height:150}}><span className="m-auto text-black-50">No experience upload yet</span></div>}

                                    <div className="py-2">
                                        {
                                            data.map((user, i)=>(
                                                <div key={i}>
                                                    {
                                                        user.workExperience.map((experience, i)=>(
                                                            <div className="border-bottom px-4 py-4 hover-edit" key={i}>
                                                                <a href="#/" className="edit-button" onClick={(e)=>{
                                                                    e.preventDefault();
                                                                    selectExperience(experience, 'Edit')
                                                                }}><span className="material-icons">edit</span></a>
                                                                <a href="#/" className="remove-button" onClick={(e)=>{
                                                                    e.preventDefault();
                                                                    selectExperience(experience, 'Remove')
                                                                }}><span className="material-icons">delete</span></a>
                                                                <div>
                                                                    <ul className="list-inline d-flex">
                                                                        <li className="list-inline-item mr-auto my-auto">
                                                                            <div className="d-flex">
                                                                                {experience.iamExperience === true &&<img src={MiniLogo} width={18}
                                                                                      height={20} alt="mini logo"
                                                                                      className="mr-2"
                                                                                      style={{marginTop: 3}}/>}
                                                                                <h5 className="mb-0">{experience.role}</h5>
                                                                            </div>
                                                                            <small>{experience.company}</small>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="list-inline d-flex">
                                                                        <li className="list-inline-item mr-auto my-auto">
                                                                            <small className="mr-3">
                                                                                {experience.remote === true && <span
                                                                                    className="material-icons material-icons-outlined md-18 mr-2"
                                                                                    style={{verticalAlign: 'sub'}}>public</span>}<strong>+{calculateYears(experience.startDateYear, experience.endDateYear)} Years</strong> {experience.remote === true &&<span>working remote</span>}</small>
                                                                        </li>
                                                                        <li className="list-inline-item ml-auto my-auto">
                                                                            <small className="mr-3">{`${experience.startDateMonth} ${experience.startDateYear}`} - {`${experience.endDateMonth} ${experience.endDateYear}`} </small>
                                                                        </li>
                                                                    </ul>
                                                                    <ReactReadMoreReadLess
                                                                        charLimit={200}
                                                                        readMoreText={"Read more"}
                                                                        readLessText={"Read less"}
                                                                        readMoreClassName="text-primary"
                                                                        readLessClassName="text-primary"
                                                                    >
                                                                        {experience.challenge}
                                                                    </ReactReadMoreReadLess>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 px-xl-3 pl-lg-1">
                                <Card className="shadow-sm rounded-lg border-0 mb-3">
                                    <ul className="list-inline d-flex my-3 mx-4 pb-2 border-bottom">
                                        <li className="list-inline-item mr-auto my-auto">
                                            <h4>Industry Expertise</h4>
                                        </li>
                                    </ul>

                                    {data[0].workExperience.length === 0 && <div className="d-flex w-100" style={{opacity:0.7, height:127}}><span className="m-auto text-black-50">No experience upload yet</span></div>}

                                    <Accordion className="px-4 pb-4" defaultActiveKey="4">

                                        <ul className="list-unstyled mb-0">
                                            {
                                                industries.map((z, i)=> {
                                                    const badgeCompany=[...new Set(data[0].workExperience.filter(y=>(y.industry === z)).map(item => item.company))];

                                                    return (<li className="mr-auto my-auto" key={i}>
                                                        <h6 className="text-left w-100 mb-3">
                                                            <a href="#expertise1" className={`text-dark font-weight-bold disabled-link`} >{z}</a>
                                                            {calculateYearsIndustry(z) !== 0 &&<span className="ml-3 caption text-muted" style={{
                                                                marginTop: '0px'
                                                            }}>+{calculateYearsIndustry(z)} Years</span>}
                                                        </h6>
                                                        <Tab.Container
                                                            id="controlled-tab-example-1"
                                                            activeKey={key}
                                                            onSelect={(k) => setKey(k)}
                                                            className="tabs-chips"
                                                            variant="pills"
                                                        >
                                                            <Nav variant="pills" className="mb-0">
                                                                {
                                                                    badgeCompany.map((k, i)=>(
                                                                        <Nav.Item key={i}>
                                                                            <Nav.Link eventKey={`${k}`}>{k} {calculateYearsCompany(k) !== 0 &&<small className="ml-2" style={{
                                                                                marginTop: '0px'
                                                                            }}>+{calculateYearsCompany(k)} Years</small>}</Nav.Link>
                                                                        </Nav.Item>
                                                                    ))
                                                                }
                                                            </Nav>
                                                            <Tab.Content className="pb-3 ml-n3 mr-n3">
                                                                {
                                                                    badgeCompany.map((j, i)=>(
                                                                        <Tab.Pane key={i} eventKey={`${j}`}>
                                                                            <div>
                                                                                {
                                                                                    //console.log(dataWork[0].workExperience.filter(p=>(p.company === j)))
                                                                                    data[0].workExperience.filter(p=>(p.company === j)).map((h, i)=>(
                                                                                        <div className="py-2 px-3 hover-edit" key={i}>
                                                                                            <a href="#/" className="edit-button" onClick={(e)=>{
                                                                                                e.preventDefault();
                                                                                                selectExperience(h, 'Edit')
                                                                                            }}><span className="material-icons">edit</span></a>
                                                                                            <small className="mr-3" style={{fontWeight:700}}>{`${h.startDateMonth} ${h.startDateYear}`} - {`${h.endDateMonth} ${h.endDateYear}`} </small>
                                                                                            <ReactReadMoreReadLess
                                                                                                charLimit={160}
                                                                                                readMoreText={"Read more"}
                                                                                                readLessText={"Read less"}
                                                                                                readMoreClassName="text-primary"
                                                                                                readLessClassName="text-primary"
                                                                                            >
                                                                                                {h.activities}
                                                                                            </ReactReadMoreReadLess>
                                                                                        </div>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </Tab.Pane>
                                                                    ))
                                                                }
                                                            </Tab.Content>
                                                        </Tab.Container>
                                                    </li>
                                                )
                                                })
                                            }
                                        </ul>
                                    </Accordion>
                                </Card>
                                <Card className="shadow-sm rounded-lg border-0 pb-4">
                                    <ul className="list-inline d-flex my-3 mx-4 pb-2 border-bottom">
                                        <li className="list-inline-item mr-auto my-auto">
                                            <h4>Soft skills</h4>
                                        </li>
                                        <li className="list-inline-item ml-auto my-auto">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip id={`tooltip-top`}>
                                                        Add soft skills
                                                    </Tooltip>
                                                }
                                            >
                                            <a href="#/" onClick={(e)=> {
                                                e.preventDefault();
                                                openModalAddSoftSkill();
                                            }}><span className="material-icons-outlined">add_circle_outline</span></a>
                                            </OverlayTrigger>
                                        </li>
                                    </ul>

                                    {data[0].softSkills.length === 0 && <div className="d-flex w-100" style={{opacity:0.7, height:127}}><span className="m-auto text-black-50">No soft skills upload yet</span></div>}

                                    <Tabs
                                        id="controlled-tab-example"
                                        defaultActiveKey={skills[0]}
                                        className="mb-0 tabs-chips mx-4"
                                        variant="pills"
                                    >
                                        {
                                            skills.map((soft, i)=>(
                                                <Tab eventKey={soft} title={soft} key={i}>
                                                    <div className="mx-4">
                                                            {
                                                                data[0].softSkills.filter(p=>(p.skill === soft)).map((q,i)=>{

                                                                    return(
                                                                    <div className="" key={i}>
                                                                        {q.quote !== undefined &&<div className="mb-3 hover-edit">
                                                                            <div className="d-flex ml-n2 mr-n2">
                                                                                <div className="quote my-auto py-2 px-3"
                                                                                     key={i}>
                                                                                    <a href="#/" className="edit-button"
                                                                                       onClick={(e) => {
                                                                                           e.preventDefault();
                                                                                           selectSoftSkill(q, 'Edit')
                                                                                       }}><span
                                                                                        className="material-icons">edit</span></a>
                                                                                    <a href="#/"
                                                                                       className="remove-button"
                                                                                       onClick={(e) => {
                                                                                           e.preventDefault();
                                                                                           selectSoftSkill(q, 'Remove')
                                                                                       }}><span
                                                                                        className="material-icons">delete</span></a>
                                                                                    <ReactReadMoreReadLess
                                                                                        charLimit={130}
                                                                                        readMoreText={"Read more"}
                                                                                        readLessText={"Read less"}
                                                                                        readMoreClassName="text-primary"
                                                                                        readLessClassName="text-primary"
                                                                                    >
                                                                                        {q.quote}
                                                                                    </ReactReadMoreReadLess>
                                                                                </div>
                                                                            </div>
                                                                            <ul className="list-inline d-flex mb-0 mx-2">
                                                                                <li className="list-inline-item mr-auto">
                                                                                    <p className="mb-0 text-primary font-weight-bold">{q.position}</p>
                                                                                    <p className="mb-0">{q.name}</p>
                                                                                </li>
                                                                            </ul>
                                                                        </div>}
                                                                    </div>
                                                                )})
                                                            }
                                                        <a href="#/" className="d-block mt-2 pt-3 pl-2 border-top" onClick={(e)=> {
                                                            e.preventDefault();
                                                            openModalAddSoftSkillSelected(soft);
                                                        }}>Add comment</a>
                                                    </div>
                                                </Tab>
                                            ))
                                        }
                                    </Tabs>
                                </Card>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <DataRequired
                activeAvatar={activeAvatar}
                setActiveAvatar={setActiveAvatar}
                dataRequiredSelected={dataRequiredSelected}
                handleChange={handleChangeDataRequired}
                editDataRequired={editDataRequired}
                show={modalEditDataRequired}
                setShow={setModalEditDataRequired}
                onHide={() => setModalEditDataRequired(false)}
            />

            <ContactData
                contactDataSelected={contactDataSelected}
                handleChange={handleChangeContactData}
                handleChangeTel={handleChangeContactTelData}
                editContactData={editContactData}
                show={modalEditContactData}
                setShow={setModalEditContactData}
                onHide={() => setModalEditContactData(false)}
            />

            <ProfessionalData
                professionalDataSelected={professionalDataSelected}
                handleChange={handleChangeProfessionalData}
                editProfessionalData={editProfessionalData}
                show={modalEditProfessionalData}
                setShow={setModalEditProfessionalData}
                onHide={() => setModalEditProfessionalData(false)}
            />

            <EnglishLevelData
                englishSelected={englishSelected}
                handleChange={handleChangeEnglish}
                editEnglish={editEnglish}
                show={modalEditEnglish}
                setShow={setModalEditEnglish}
                onHide={() => setModalEditEnglish(false)}
            />


            <EnglishCertificationAdd
                englishCertificationSelected={englishCertificationSelected}
                handleChange={handleChangeEnglishCertification}
                addEnglishCertification={addEnglishCertification}
                show={modalAddEnglishCertifications}
                setShow={setModalAddEnglishCertifications}
                onHide={() => setModalAddEnglishCertifications(false)}
            />
            <EnglishCertificationEdit
                englishCertificationSelected={englishCertificationSelected}
                handleChange={handleChangeEnglishCertification}
                editEnglishCertifications={editEnglishCertifications}
                show={modalEditEnglishCertifications}
                setShow={setModalEditEnglishCertifications}
                onHide={() => setModalEditEnglishCertifications(false)}
            />
            <ModalAdviserEnglishCertification
                englishCertificationSelected={englishCertificationSelected}
                handleChange={handleChangeEnglishCertification}
                removeEnglishCertification={removeEnglishCertification}
                show={modalRemoveEnglishCertifications}
                setShow={setModalRemoveEnglishCertifications}
                onHide={() => setModalRemoveEnglishCertifications(false)}
            />
{/*
            <EducationData
                show={educationData}
                setShow={setEducationData}
                onHide={() => setEducationData(false)}
            />
*/}
            <EducationDataAdd
                educationSelected={educationSelected}
                handleChange={handleChangeEducation}
                addEducation={addEducation}
                show={modalAddEducation}
                setShow={setModalAddEducation}
                onHide={() => setModalAddEducation(false)}
            />
            <EducationDataEdit
                educationSelected={educationSelected}
                handleChange={handleChangeEducation}
                editEducation={editEducation}
                show={modalEditEducation}
                setShow={setModalEditEducation}
                onHide={() => setModalEditEducation(false)}
            />
            <ModalAdviserEducation
                educationSelected={educationSelected}
                removeEducation={removeEducation}
                show={modalRemoveEducation}
                setShow={setModalRemoveEducation}
                onHide={() => setModalRemoveEducation(false)}
            />



            <CertificationAdd
                certificationSelected={certificationSelected}
                handleChange={handleChangeCertification}
                addCertification={addCertification}
                show={modalAddCertification}
                setShow={setModalAddCertification}
                onHide={() => setModalAddCertification(false)}
            />
            <CertificationEdit
                certificationSelected={certificationSelected}
                handleChange={handleChangeCertification}
                editCertification={editCertification}
                show={modalEditCertification}
                setShow={setModalEditCertification}
                onHide={() => setModalEditCertification(false)}
            />
            <ModalAdviserCertification
                certificationSelected={certificationSelected}
                removeCertification={removeCertification}
                show={modalRemoveCertification}
                setShow={setModalRemoveCertification}
                onHide={() => setModalRemoveCertification(false)}
            />


            <SoftSkillAdd
                disableCheck={disableCheck}
                setDisableCheck={setDisableCheck}
                feedback={feedback}
                setFeedback={setFeedback}
                disableSkill={disableSkill}
                setDisableSkill={setDisableSkill}
                softSkillSelected={softSkillSelected}
                handleChange={handleChangeSoftSkill}
                addSoftSkill={addSoftSkill}
                show={modalAddSoftSkill}
                setShow={setModalAddSoftSkill}
                onHide={() => setModalAddSoftSkill(false)}
            />
            <SoftSkillEdit
                softSkillSelected={softSkillSelected}
                handleChange={handleChangeSoftSkill}
                editSoftSkill={editSoftSkill}
                show={modalEditSoftSkill}
                setShow={setModalEditSoftSkill}
                onHide={() => setModalEditSoftSkill(false)}
            />
            <ModalAdviserSoftSkill
                softSkillSelected={softSkillSelected}
                removeSoftSkill={removeSoftSkill}
                show={modalRemoveSoftSkill}
                setShow={setModalRemoveSoftSkill}
                onHide={() => setModalRemoveSoftSkill(false)}
            />


            <WorkExperienceDataAdd
                experienceSelected={experienceSelected}
                handleChange={handleChange}
                add={add}
                show={modalAdd}
                setShow={setModalAdd}
                onHide={() => setModalAdd(false)}
            />
            <WorkExperienceDataEdit
                experienceSelected={experienceSelected}
                handleChange={handleChange}
                edit={edit}
                show={modalEdit}
                setShow={setModalEdit}
                onHide={() => setModalEdit(false)}
            />
            <ModalAdviserWorkExperience
                experienceSelected={experienceSelected}
                remove={remove}
                show={modalRemove}
                setShow={setModalRemove}
                onHide={() => setModalRemove(false)}
            />

            {/*<SoftSkillsData
                show={softSkillsData}
                setShow={setSoftSkillsData}
                onHide={() => setSoftSkillsData(false)}
            />*/}
        </div>
    );
}

export default Resume;