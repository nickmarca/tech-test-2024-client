import classNames from 'classnames';

export default function FreeGift({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        'py-1 px-4 bg-fuchsia-300 border border-fuchsia-700 absolute',
        className,
      )}
    >
      <span className="text-xl font-bold text-fuchsia-800">{'FREE GIFT'}</span>
    </div>
  );
}
