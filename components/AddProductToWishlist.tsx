export interface AddProductToWishlistProps {
  onAddtoWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({
  onAddtoWishList,
  onRequestClose,
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos
      <button onClick={onAddtoWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
