import React, {
  useContext,
  createContext,
  useState,
  ReactChild,
  ReactChildren,
  ReactElement,
} from 'react';
import type { RecruitmentListItem, Recruitment } from '../api/recruitment';

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
  const [currentPost, setCurrentPost] = useState<Recruitment>(initialCurrentPostState);
  const [currentPostList, setCurrentPostList] = useState<RecruitmentListItem[]>([]);

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
