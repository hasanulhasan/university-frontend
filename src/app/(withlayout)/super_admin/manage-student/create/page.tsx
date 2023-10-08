import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { getUserInfo } from '@/services/auth.service';

const CreateStudent = () => {
  const {role} = getUserInfo() as any;

  return (
    <div>
      <UMBreadCrumb 
           items={[
            {
              label: `${role}/manage-student`,
              link: `/${role}/manage-student`
            }
           ]}/>
      <h1>This is create student page</h1>
    </div>
  );
};

export default CreateStudent;