import React, {
  useContext,
  createContext,
  useState,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';
import type { RecruitmentProps } from '../page/Recruitment';
import type { RecruitmentItemProps } from '../component/RecruitmentItem';

const RecruitmentPostContext = createContext<Record<string, unknown>>({});

const initialCurrentPostState = {
  applicantCount: 0,
  categoryName: '',
  content: '',
  createdAt: '',
  endDate: '',
  groupId: 0,
  postId: 0,
  postType: '',
  startDate: '',
  title: '',
  totalStudentCount: 0,
  updatedAt: '',
  userName: '',
};

const RecruitmentPostProvider = (
  { children }: { children?: ReactChild | ReactChildren | ReactChild[] },
): ReactElement => {
  const [currentPost, setCurrentPost] = useState<RecruitmentProps>(initialCurrentPostState);
  const [currentPostList, setCurrentPostList] = useState<RecruitmentItemProps[]>([]);

  return (
    <RecruitmentPostContext.Provider
      value={{
        currentPost,
        currentPostList,

        setCurrentPost,
        setCurrentPostList,
      }}
    >
      {children}
    </RecruitmentPostContext.Provider>
  );
};

export const useRecruitmentPostContext = (): Record<string, unknown> => useContext(RecruitmentPostContext);

export default RecruitmentPostProvider;
