import { Area } from "../proto/area_pb";

export function getActivityArea(
  userId: string,
  selectActivityAreaIds: (userId: string) => Promise<Array<number>>,
  selectAreasByIds: (ids: Array<number>) => Promise<Array<Area>>
): Promise<Array<Area>> {
  return selectActivityAreaIds(userId).then((ids: Array<number>) =>
    selectAreasByIds(ids)
  );
}

export function updateActivityArea(
  userId: string,
  areas: Array<Area>,
  deleteActivityAreas: (userId: string) => Promise<number>,
  insertActivityAreas: (userId: string, areas: Array<Area>) => Promise<number>
): Promise<number> {
  return deleteActivityAreas(userId).then(() =>
    insertActivityAreas(userId, areas)
  );
}
