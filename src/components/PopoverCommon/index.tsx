import Popover from '@mui/material/Popover';

export default function BasicPopover(props: { open: boolean, onClose: () => void, content?: any, anchorEl?: any, className?: string }) {
    const { anchorEl, open, onClose, content, className } = props;
    return (
        <div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                classes={{ root: className }}
            >
                {content}
            </Popover>
        </div>
    );
}