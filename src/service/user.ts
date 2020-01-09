import { Area } from "../proto/area_pb";

export function getActivityArea(userId: string): Promise<Array<Area>> {
  return new Promise<Array<Area>>(() => {});
}

export function updateActivityArea(userId: string, areas: Array<Area>): void {
  // delete current areas
  // insert areas again
}

export function deleteActivityArea(userId: string): void {
}

