export class RawMaterialResponseDto {
  id: number;
  code: string;
  description: string;
  value: number;
  stock?: number;
  supplier?: string | null;
  color?: string | null;
  width?: number;
  grammage?: number;
  locationId: number;
  composition?: string;
  ncm?: string;
  type?: string;
  status?: string;
  active: boolean;
  observation?: string;
  image?: string | null;
  unit_description?: string;
  supplier_trade_name?: string;
  color_description?: string;
  location_description?: string;
}
