import StepperForm from '@/components/StepperForm/StepperForm';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';

const CreateStudent = () => {
  const {role} = getUserInfo() as any;

  const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo/>
    },
    {
      title: 'Basic Information',
      content: <StudentInfo/>
    },
    {
      title: 'Guardian Information',
      content: <StudentInfo/>
    },
  ];

  return (
    <div>
      <UMBreadCrumb 
           items={[
              {
                label: `${role}`,
                link: `/${role}`
              },
              {
                label: `manage student`,
                link: `/${role}/manage-student`
              }
           ]}/>
      <h1>Create Student</h1>
      <StepperForm steps={steps}/>
    </div>
  );
};

export default CreateStudent;