import Swal from "sweetalert2";

export function showSuccess () {
  Swal.fire({
    title: "Succès",
    showCloseButton: true,
    icon: "success"
  })
}


export interface ApiResponse<T> {
  data: T
}

export interface ListPaginatedResponse<T> {
  docs: T[],
  totalDocs: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  page: number
}
