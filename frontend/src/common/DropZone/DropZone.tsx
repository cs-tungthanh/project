import { message, Row } from 'antd';
import classNames from 'classnames';
import React, { ChangeEvent, useRef, useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import styles from './DropZone.module.scss';

type DropZoneProps = {
    onFilesAdded(files: File[]): void;
    disabled?: boolean;
    classname?: string;
    extensions?: string[];
    singleFile?: boolean;
}

export const DropZone = ({
    onFilesAdded, classname = '', extensions = [], disabled = false, singleFile = true,
}: DropZoneProps): JSX.Element => {
    const [hightlight, setHightLight] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        setHightLight(true);
    };

    const onDragLeave = (): void => {
        setHightLight(false);
    };

    const fileListToArray = (files: FileList): File[] => {
        const array: File[] = [];
        for (let i = 0; i < files.length; i++) {
            array.push(files[i]);
        }
        return array;
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if (disabled) {
            return;
        }
        const { files } = e.dataTransfer;
        const arrayFiles = fileListToArray(files);
        const check = arrayFiles.every((file) => extensions.includes(`.${file.name.split('.').pop()}`));
        if (check) {
            if (singleFile && arrayFiles.length > 0) {
                onFilesAdded([arrayFiles[0]]);
            } else {
                onFilesAdded(arrayFiles);
            }
        } else {
            message.error('File is invalid!', 1);
        }
        setHightLight(false);
    };

    const openFileDialog = (): void => {
        if (disabled) return;
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const onFilesAddedCb = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        if (e.target && e.target.files && e.target.files.length) {
            const { files } = e.target;
            const arrayFiles = fileListToArray(files);
            if (singleFile && arrayFiles.length > 0) {
                onFilesAdded([arrayFiles[0]]);
            } else {
                onFilesAdded(arrayFiles);
            }
        }
    };

    const onInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
        const element = event.target as HTMLInputElement;
        element.value = '';
    };

    return (
        <div
            className={classNames(styles.container, classname, {
                [styles.hightlight]: hightlight,
            })}
            role="button"
            tabIndex={0}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={openFileDialog}
            onKeyPress={openFileDialog}
            style={{ cursor: disabled ? 'default' : 'pointer' }}
        >
            <Row>
                <input
                    ref={fileInputRef}
                    type="file"
                    name="files"
                    style={{ display: 'none' }}
                    multiple={!singleFile}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                        onFilesAddedCb(e);
                    }}
                    onClick={onInputClick}
                    accept={extensions.join(',')}
                />
                <IoAddOutline />
            </Row>
        </div>
    );
};
