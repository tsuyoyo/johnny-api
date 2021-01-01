import { pj } from "johnny-proto";
import proto = pj.sakuchin.percussion.proto;

export function getUserProfile(
  userId: string,
  getActivityArea: (userId: string) => Promise<Array<proto.ICity>>
): Promise<proto.IUserProfile> {
  const promises = [];
  promises.push(getActivityArea(userId));

  return Promise.all(promises).then((results) => {
    return new proto.UserProfile({
      activeCities: results[0],
    });
  });
}

export function updateUserProfile(
  user: proto.IUser,
  userProfile: proto.IUserProfile,
  updateActivityArea: (
    usreId: string,
    areas: Array<proto.ICity>
  ) => Promise<number>
): Promise<any> {
  // note : when more attributes are defined in userProfile,
  // more Promise chains are necessary
  return updateActivityArea(user.id, userProfile.activeCities);
}

export function deleteUserProfile(
  userId: string,
  deleteActivityArea: (userId: string) => Promise<number>
): Promise<any> {
  // note : when more attributes are defined in userProfile,
  // more Promise chains are necessary
  return deleteActivityArea(userId);
}
