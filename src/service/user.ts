import { UserProfile, User } from "../proto/user_pb";
import { Area } from "../proto/area_pb";

export function getUserProfile(
  userId: string,
  getActivityArea: (userId: string) => Promise<Array<Area>>
): Promise<UserProfile> {
  const promises = [];
  promises.push(getActivityArea(userId));

  console.log(`getUsrProfile#service - 1111111111`);

  return Promise.all(promises).then((results: any[]) => {
    console.log(`getUsrProfile#service - 2222222 : ${JSON.stringify(results)}`);
    const userProfile = new UserProfile();
    userProfile.setActivityareasList(results[0]);
    console.log(`getUsrProfile#service - 333333333`);
    return userProfile;
  });
}

export function updateUserProfile(
  user: User,
  userProfile: UserProfile,
  updateActivityArea: (usreId: string, areas: Array<Area>) => Promise<number>
): Promise<any> {
  // note : when more attributes are defined in userProfile,
  // more Promise chains are necessary
  return updateActivityArea(user.getId(), userProfile.getActivityareasList());
}

export function deleteUserProfile(
  userId: string,
  deleteActivityArea: (userId: string) => Promise<number>
): Promise<any> {
  return deleteActivityArea(userId);
}
